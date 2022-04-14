class CoreService {
  #baseUrl = '/';

  async post(url = "", headers = {}, body = {}){
    try {
      await fetch(`${this.#baseUrl}/${url}`, {
        method: "POST",
        headers: {
          ...headers,
        },
        body: { ...body }
      })
    } catch (err) {
      throw new Error(err)
    }
  }
}

export default new CoreService()