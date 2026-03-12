import { Injectable, signal } from "@angular/core";

export interface Toast { id: string; icon: string; msg: string; type: "success"|"error"|"info"; }

@Injectable({ providedIn: "root" })
export class ToastService {
  private _items = signal<Toast[]>([]);
  readonly items  = this._items.asReadonly();

  private push(icon: string, msg: string, type: Toast["type"]): void {
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2);
    this._items.update((t) => [...t, { id, icon, msg, type }]);
    setTimeout(() => this._items.update((t) => t.filter((x) => x.id !== id)), 3500);
  }

  success(msg: string): void { this.push("✅", msg, "success"); }
  error(msg: string):   void { this.push("❌", msg, "error"); }
  info(msg: string):    void { this.push("ℹ️", msg, "info"); }
}
