import {
    setDataLS,
    getDataObjectLS,
    getDataArrayLS
  } from '../../src/helpers/local-storage';
  
  describe('Local Storage Functions', () => {
    beforeEach(() => {
      const localStorageMock: Record<string, string> = {};
  
      // Mock localStorage
      const mockLocalStorage = {
        getItem: jest.fn((key) => localStorageMock[key]),
        setItem: jest.fn((key, value) => {
          localStorageMock[key] = value.toString();
        }),
        removeItem: jest.fn((key) => {
          delete localStorageMock[key];
        }),
        clear: jest.fn(() => {
          Object.keys(localStorageMock).forEach((key) => {
            delete localStorageMock[key];
          });
        })
      };
  
      Object.defineProperty(window, 'localStorage', {
        value: mockLocalStorage,
        writable: true
      });
    });
  
    it('should set data to local storage', () => {
      const key = 'testKey';
      const data: any = [{ name: 'John', age: 30 }];
      setDataLS(key, data);
      expect(window.localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(data));
    });
  
    it('should get data object from local storage', () => {
      const key = 'testKey';
      const data = { name: 'John', age: 30 };
      window.localStorage.setItem(key, JSON.stringify(data));
      const retrievedData = getDataObjectLS(key);
      expect(retrievedData).toEqual(data);
    });
  
    it('should get data array from local storage', () => {
      const key = 'testKey';
      const data = [{ name: 'John', age: 30 }, { name: 'Alice', age: 28 }];
      window.localStorage.setItem(key, JSON.stringify(data));
      const retrievedData = getDataArrayLS(key);
      expect(retrievedData).toEqual(data);
    });
  });