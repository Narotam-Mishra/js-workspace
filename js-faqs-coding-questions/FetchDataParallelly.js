
// Problem link - Write code to fetch the data from three different files parallelly

async function fetchFileData(url) {
  try {
    const res = await fetch(url);

    // check if response is successfull
    if (!res.ok) {
      throw new Error(`Failed to load data from: ${url}`);
    }

    // return response text if it is successful
    return await res.text();
  } catch (error) {
    console.log(`Error while fetching file data:`, error);
    return null;
  }
}

async function fetchFileDataParallelly(params) {
    // define file path URL
    const fileURLs = [
    'file1.txt',  
    'file2.txt',
    'file3.txt'
  ];

  try {
    const [file1Data, file2Data, file3Data] = await Promise.all(
        fileURLs.map(fileURL => fetchFileData(fileURL))
    );

    // log file contents
    console.log("File-1 Content:", file1Data);
    console.log("File-2 Content:", file2Data);
    console.log("File-3 Content:", file3Data);

    return {
        file1Data, file2Data, file3Data
    };
  } catch (error) {
    // handle error
    console.error(`Unexpected error while fetching data from files:`, error);
  }
}

fetchFileDataParallelly();