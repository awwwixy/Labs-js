export class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  on(event, listener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  off(event, listener) {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter((l) => l !== listener);
  }

  emit(event, data) {
    const eventListeners = this.listeners[event];

    if (!eventListeners || eventListeners.length === 0) {
      console.log(`Немає слухачів події "${event}"`);
      return;
    }

    for (const listener of eventListeners) {
      try {
        listener(data);
      } catch (err) {
        this.emitError(err, event);
      }
    }
  }

  emitError(err, sourceEvent) {
    const errorListeners = this.listeners["error"];
    if (errorListeners && errorListeners.length > 0) {
      for (const listener of errorListeners) {
        listener({ error: err, event: sourceEvent });
      }
    } else {
      console.log("Помилка без обробника:", err.message);
    }
  }
}
