export function imageExist(imageSrc: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        let img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = imageSrc;
      }, 100);
    });
  }
  
  export function loadJSON(full_path_file: string): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        let xobj: XMLHttpRequest = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open("GET", full_path_file, true);
        xobj.onreadystatechange = () => {
          if (xobj.readyState === 4 && xobj.status === 200) {
            resolve(xobj.responseText);
          } else if (xobj.status !== 200) {
            let err = `ERROR during json file retrieve: '${full_path_file}', readyState: ${xobj.readyState}, status: ${xobj.status}, statusText: ${xobj.statusText}, responseText: ${xobj.responseText}`;
            console.info(err);
          }
        };
        xobj.send(null);
      }, 100);
    });
  }
  