export const downloadObject = (object: any) => {
  const blob = new Blob([JSON.stringify(object, null, 2)], { type: "application/json" });
  const objectUrl = URL.createObjectURL(blob);

  const dl = document.createElement("a");
  dl.href = objectUrl;
  dl.download = `gscale_data_${new Date().toISOString()}.json`;
  dl.click();
};
