
//эта функци написана для того чтобы не происходило загрузки страницы, чтобы загружался определенный элемент. 
//Это заебись для оптимизации 

//Эндпоинт (Endpoint - конечная точка) — это само обращение к маршруту отдельным HTTP методом. 
//Эндпоинт выполняют конкретную задачу, принимают параметры и возвращают данные Клиенту.



export function request(endpoint, { body, ...customConfig } = {}) {
  const headers = { 'content-type': 'application/json' };

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig, //поверхностного копирования объектов
    headers: {
      ...headers, //поверхностного копирования объектов
      ...customConfig.headers, 
    }
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  return window
    .fetch(`/api/${endpoint}`, config)
    .then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}
