import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

export const FORM_STATE = "FORM_STATE";
export const PROGRESS_STATE = "PROGRESS_STATE";

interface Subject<T> {
  key: string;
  value: BehaviorSubject<T>;
}

const subjects: Subject<any>[] = [];

function getNewSubject<T>(subjectname: string, initValue: T): Subject<T> {
  return {
    key: subjectname,
    value: new BehaviorSubject(initValue),
  }
}

export function getSharedStateValue<T>(subjectname: string): T | undefined {
  const subject = subjects.find(x => x.key === subjectname);
  if (!subject) {
    return undefined;
  }

  return subject.value as T;
};

export function useSharedState<T>(subjectname: string, initval: T): [T, (val: T) => void] {
  const [value, setValue] = useState(initval);

  let subject = subjects.find(x => x.key === subjectname);
  if (!subject) {
    subject = getNewSubject(subjectname, initval);
    subjects.push(subject);
  }

  useEffect(() => {
    const subscription = subject?.value.subscribe((message) => {
      setValue(message);
    });

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, [subject]);

  function set(val: T) {
    subject?.value.next(val);
  }

  return [value, set];
};