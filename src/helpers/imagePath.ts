import { PATHS } from '../constants/paths';

/**
 * Checks if a file exists at the specified URL
 * @param url - The URL to check
 * @returns Promise that resolves to true if the file exists
 */
export async function imageExists(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error(`Failed to check if image exists at ${url}:`, error);
    return false;
  }
}

/**
 * Determine the correct image path based on installation method
 * @param customPath - Optional custom path provided in config
 * @returns Promise resolving to the determined image path
 */
export async function determineImagePath(customPath?: string): Promise<string | null> {
  // If a custom path is provided, use it directly
  if (customPath) {
    const exists = await imageExists(customPath + PATHS.TEST_FILE);
    if (exists) {
      return customPath;
    }
    console.warn(`Custom image path ${customPath} is not valid. Falling back to default paths.`);
  }

  // Check HACS path
  const hacsPathExists = await imageExists(PATHS.HACS_IMAGE_PATH + PATHS.TEST_FILE);
  if (hacsPathExists) {
    console.info(`Using HACS path for icons: ${PATHS.HACS_IMAGE_PATH}`);
    return PATHS.HACS_IMAGE_PATH;
  }

  // Check manual installation path
  const manualPathExists = await imageExists(PATHS.MANUAL_IMAGE_PATH + PATHS.TEST_FILE);
  if (manualPathExists) {
    console.info(`Using manual installation path for icons: ${PATHS.MANUAL_IMAGE_PATH}`);
    return PATHS.MANUAL_IMAGE_PATH;
  }

  console.error('Could not find valid image path. Icons may not display correctly.');
  return null;
}

/**
 * Setup image path synchronously - returns a default path that will be updated
 * @param customPath - Optional custom path
 * @returns Initial image path string or null
 */
export function setupImagePath(customPath?: string): string | null {
  const path = customPath || PATHS.HACS_IMAGE_PATH;
  
  // Start the async validation process but don't wait for it
  determineImagePath(customPath).then(validatedPath => {
    // This will be handled by the component that receives the result
  });
  
  return path;
}