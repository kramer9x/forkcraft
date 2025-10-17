import { formatDate, capitalize, generateId, debounce } from './index';

describe('formatDate', () => {
  it('should format a date object correctly', () => {
    const date = new Date('2024-01-15');
    const result = formatDate(date);
    expect(result).toBe('January 15, 2024');
  });

  it('should format a date string correctly', () => {
    const dateString = '2024-01-15';
    const result = formatDate(dateString);
    expect(result).toBe('January 15, 2024');
  });
});

describe('capitalize', () => {
  it('should capitalize the first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('should handle empty string', () => {
    expect(capitalize('')).toBe('');
  });

  it('should handle single character', () => {
    expect(capitalize('a')).toBe('A');
  });
});

describe('generateId', () => {
  it('should generate an ID of default length', () => {
    const id = generateId();
    expect(id).toHaveLength(8);
  });

  it('should generate an ID of specified length', () => {
    const id = generateId(12);
    expect(id).toHaveLength(12);
  });

  it('should generate different IDs', () => {
    const id1 = generateId();
    const id2 = generateId();
    expect(id1).not.toBe(id2);
  });
});

describe('debounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should call the function after the wait time', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 100);

    debouncedFn('test');
    expect(mockFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);
    expect(mockFn).toHaveBeenCalledWith('test');
  });

  it('should not call the function if called multiple times within wait time', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 100);

    debouncedFn('test1');
    debouncedFn('test2');
    debouncedFn('test3');

    jest.advanceTimersByTime(100);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith('test3');
  });
});
