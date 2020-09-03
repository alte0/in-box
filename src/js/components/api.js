const Method = {
  GET: `GET`,
  POST: `POST`,
  PUT: `PUT`,
  PATCH: `PATCH`,
  DELETE: `DELETE`
}

export class ApiFetch {
  constructor () {
    this._baseUrl = 'https://reqres.in/api/'
  }
  /**
   * Общая функция для сетевых запросов
   */
  async _fetchRequest ({ url, method = Method.GET, body = null }) {
    const response = await fetch(`${this._baseUrl}${url}`, {
      method,
      body
    })

    if (response.ok) {
      return response.json()
    } else {
      throw new Error(`Ошибка отправки данных. ${response.status}`)
    }
  }

  /**
   * Получение цветовых значений
   */
  getColor = () => this._fetchRequest({ url: `unknown?per_page=12` });
}

// export const apiFetch = new ApiFetch()
