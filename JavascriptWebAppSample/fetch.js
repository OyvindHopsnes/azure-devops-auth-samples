/** 
 * Helper function to call web API endpoint
 * using the authorization bearer token scheme
*/
function callApiWithToken(endpoint, token, callback) {
    const headers = new Headers();
    const bearer = `Bearer ${token}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    logMessage('Calling web API...');

    fetch(endpoint, options)
        .then(response => response.json())
        .then(response => {
            logMessage('Web API responds:');
            response.value.forEach((val) => {
                logMessage(JSON.stringify(val, null, 4));                
            });
        }).catch(error => {
            console.error(error);
        });
}