/**
 * Checks if a file exists at the specified URL
 * @param url - The URL to check
 * @returns Promise that resolves to true if the file exists
 */
export declare function imageExists(url: string): Promise<boolean>;
/**
 * Determine the correct image path based on installation method
 * @param customPath - Optional custom path provided in config
 * @returns Promise resolving to the determined image path
 */
export declare function determineImagePath(customPath?: string): Promise<string | null>;
/**
 * Sets up image path with validation callback
 * @param customPath - Optional custom path
 * @param callback - Function to handle validation result
 * @returns Initial path string
 */
export declare function setupImagePath(customPath?: string | null, callback?: (validatedPath: string | null) => void): string | null;
//# sourceMappingURL=imagePath.d.ts.map