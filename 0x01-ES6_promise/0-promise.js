export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous API call
      setTimeout(() => {
        const response = "API response data";
        // Check if the response was successful or not
        const isSuccess = true;
  
        if (isSuccess) {
          resolve(response); // Resolve the Promise with the response data
        } else {
          reject("Error: Failed to fetch data from API"); // Reject the Promise with an error message
        }
      }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
    });
  }
  