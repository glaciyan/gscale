/**
 * Downloads a file by creating a blob url and downloading it through an a tag
 *
 * @param desktopFileName Only valid for desktop devices because,
 * according to my tests on an Android phone,
 * mobile devices seem to ignore the download property on the a tag.
 */
export const downloadObject = (object: any, desktopFileName: string) => {
  const blob = new Blob([JSON.stringify(object, null, 2)], { type: "application/json" });
  const objectUrl = URL.createObjectURL(blob);

  const dl = document.createElement("a");
  dl.href = objectUrl;
  dl.download = desktopFileName;
  dl.click();
};
