class CoreService {
  #baseUrl = process.env.REACT_APP_API_BASE_URL;

  async post(url = "", headers = {}, body = {}){
    try {
      const res = await fetch(`${this.#baseUrl}${url}`, {
        method: "POST",
        headers: {
          ...headers,
        },
        body: JSON.stringify({ ...body })
      })

      console.log("Core Service res:", res)
    } catch (err) {
      throw new Error(err)
    }
  }
}

export default new CoreService()