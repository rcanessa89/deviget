import { useState } from 'react';

export type LSKeyValue = string | string[] | number | number[] | (string|number)[];

export type LSValue = {
  [key:string]: LSKeyValue;
}

export class LS {
  public key: string;

  constructor(key: string, value: LSValue = {}) {
    this.key = key;

    this.setKey(value);
  }

  public getItem(): LSKeyValue | LSValue {
    return JSON.parse(localStorage[this.key] || 'null');
  }

  public getValue(key: string): LSKeyValue | LSValue | null {
    const currentValue = JSON.parse(localStorage.getItem(this.key) || 'null');

    if (currentValue && currentValue[key]) {
      return currentValue[key]
    } else if (currentValue && !currentValue[key]) {
      return null
    }

    this.setKey();

    return null;
  }

  public save(key: string, newValue: LSKeyValue | LSValue): void {
    const currentValue = JSON.parse(localStorage.getItem(this.key) || 'null');

    if (currentValue) {
      const value = {
        ...currentValue,
        [key]: newValue
      };

      localStorage.setItem(this.key, JSON.stringify(value));
    } else {
      this.setKey();
    }
  }

  public del(key: string): void {
    const currentValue = JSON.parse(localStorage.getItem(this.key) || 'null');

    if (currentValue) {
      delete currentValue[key];

      localStorage.setItem(this.key, JSON.stringify(currentValue));
    } else {
      this.setKey();
    }
  }

  private setKey(value: LSValue = {}): void {
    const lsKeyValue = localStorage[this.key];

    if (!lsKeyValue) {
      localStorage.setItem(this.key, JSON.stringify(value));
    }
  }
}

export const useLS = (ls: LS, key: string): [LSKeyValue | LSValue | null, (v: LSKeyValue | LSValue) => void] => {
  const [value, setValue] = useState(ls.getValue(key));

  const setNewValue = (v: LSKeyValue | LSValue) => {
    ls.save(key, v);
    setValue(v);
  };

  return [value, setNewValue];
};
