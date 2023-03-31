// 被 navigator.serviceWorker.controller.postMessage 的数据会被送达到这
self.addEventListener('message', async event=>{
    console.log("event ==", event);
    const clients = await self.clients.matchAll()
    console.log(" clients =", clients);
    clients.forEach(client => {
        console.log("forEach =", event.data.value);
        client.postMessage(event.data.value)
    });
})