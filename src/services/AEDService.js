import backend from "../api/backend";

class AEDService {
  static async create(aed) {
    const response = await backend.post('/defibrillator', aed);
    return response;
  }
}

export default AEDService;