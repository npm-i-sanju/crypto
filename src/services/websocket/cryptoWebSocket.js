class CryptoWebSocket {
    constructor(){
        this.ws = null;
        this.subscribers = new Map();
    }
    connect(url) {
        this.ws = new WebSocket(url);
        this.ws.onopen =()=>{
            console.log("WebSocket connection opened");
        }
        this.ws.onmessage =(event)=>{
            const data = JSON.parse(event.data);
            this.notifySubscribers(data);
        }
        this.ws.onerror =(error)=>{
            console.log("WebSocket error:", error);
        }
        this.ws.onclose =()=>{
            console.log("WebSocket connection closed");
        }
    }

    subscribe(id, callback) {
        this.subscribers.set(id, callback);
    }
    unsubscribe(id) {
        this.subscribers.delete(id);
    }
    notifySubscribers(data) {
        this.subscribers.forEach((callback)=>callback(data))
    }
    disconnect() {
        if (this.ws) {
            this.ws.close();
        }
    }
}

export default CryptoWebSocket;