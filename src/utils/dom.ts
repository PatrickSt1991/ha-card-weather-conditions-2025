/**
 * Creates an HTML element with the given properties
 * @param tag - The HTML tag name
 * @param properties - The properties to set on the element
 * @param children - Child elements or text to append
 * @returns The created HTML element
 */
export function createElement<T extends HTMLElement>(
    tag: string,
    properties: { [key: string]: any } = {},
    children?: Array<HTMLElement | string>
  ): T {
    const element = document.createElement(tag) as T;
    
    // Set properties
    for (const [key, value] of Object.entries(properties)) {
      if (key === 'className') {
        element.className = value;
      } else if (key === 'style' && typeof value === 'object') {
        Object.assign(element.style, value);
      } else if (key.startsWith('on') && typeof value === 'function') {
        element.addEventListener(key.substring(2).toLowerCase(), value);
      } else {
        element.setAttribute(key, value);
      }
    }
    
    // Append children
    if (children) {
      for (const child of children) {
        if (typeof child === 'string') {
          element.appendChild(document.createTextNode(child));
        } else {
          element.appendChild(child);
        }
      }
    }
    
    return element;
  }
  
  /**
   * Checks if an image exists at the specified URL
   * @param url - The URL to check
   * @returns Promise resolving to true if the image exists, false otherwise
   */
  export function imageExists(url: string): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }
  
  /**
   * Loads a JSON file from the specified URL
   * @param url - The URL to fetch the JSON from
   * @returns Promise resolving to the JSON data
   */
  export function loadJSON(url: string): Promise<string> {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load ${url}: ${response.statusText}`);
        }
        return response.text();
      })
      .catch(error => {
        console.error('Error loading JSON:', error);
        return '{}';
      });
  }
  
  /**
   * Safely parses a string as JSON, returning a default value if parsing fails
   * @param jsonString - The JSON string to parse
   * @param defaultValue - The default value to return if parsing fails
   * @returns The parsed object or the default value
   */
  export function safeParseJSON<T>(jsonString: string, defaultValue: T): T {
    try {
      return JSON.parse(jsonString) as T;
    } catch (e) {
      console.error('Error parsing JSON:', e);
      return defaultValue;
    }
  }
  
  /**
   * Computes the distance between two points
   * @param x1 - x-coordinate of the first point
   * @param y1 - y-coordinate of the first point
   * @param x2 - x-coordinate of the second point
   * @param y2 - y-coordinate of the second point
   * @returns The Euclidean distance between the points
   */
  export function distance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }
  
  /**
   * Creates a debounced version of a function
   * @param func - The function to debounce
   * @param wait - The number of milliseconds to delay
   * @returns The debounced function
   */
  export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    
    return function(...args: Parameters<T>) {
      const later = () => {
        timeout = null;
        func(...args);
      };
      
      if (timeout !== null) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(later, wait);
    };
  }