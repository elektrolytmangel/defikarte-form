import { useState, useEffect } from "react";
import { BehaviorSubject } from "rxjs";

const subjects = {};

export const FORM_STATE = "FORM_STATE";
export const PROGRESS_STATE = "PROGRESS_STATE";

function getNewSubject(initValue) {
  return new BehaviorSubject(initValue);
}

export const getSharedStateValue = (subjectname) => {
  if (!subjects[subjectname]) {
    return undefined;
  }

  const subject = subjects[subjectname];

  return subject.value;
};

export const useSharedState = (subjectname, initval) => {
  const [value, setValue] = useState(initval);

  if (!subjects[subjectname]) {
    subjects[subjectname] = getNewSubject(initval);
  }

  const subject = subjects[subjectname];

  useEffect(() => {
    const subscription = subject.subscribe((message) => {
      setValue(message);
    });

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, [subject]);

  function set(val) {
    subject.next(val);
  }

  return [value, set];
};