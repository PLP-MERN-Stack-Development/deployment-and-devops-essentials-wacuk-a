const https = require('https');

const endpoints = [
  {
    name: 'Backend API',
    url: 'https://mern-backend-wacuk-a.onrender.com/health',
    expectedStatus: 200
  },
  {
    name: 'Frontend App', 
    url: 'https://deployment-and-devops-essentials-wa-khaki.vercel.app/',
    expectedStatus: 200
  }
];

function checkEndpoint(endpoint) {
  return new Promise((resolve) => {
    const start = Date.now();
    
    https.get(endpoint.url, (res) => {
      const responseTime = Date.now() - start;
      const isHealthy = res.statusCode === endpoint.expectedStatus;
      
      resolve({
        name: endpoint.name,
        status: isHealthy ? '✅ HEALTHY' : '❌ UNHEALTHY',
        statusCode: res.statusCode,
        responseTime: `${responseTime}ms`,
        timestamp: new Date().toISOString()
      });
    }).on('error', (error) => {
      resolve({
        name: endpoint.name,
        status: '❌ ERROR',
        error: error.message,
        timestamp: new Date().toISOString()
      });
    });
  });
}

async function monitorAll() {
  console.log('🔍 Starting health check...\n');
  
  for (const endpoint of endpoints) {
    const result = await checkEndpoint(endpoint);
    console.log(`${result.name}:`);
    console.log(`  Status: ${result.status}`);
    console.log(`  Code: ${result.statusCode || 'N/A'}`);
    console.log(`  Response Time: ${result.responseTime || 'N/A'}`);
    console.log(`  Time: ${result.timestamp}`);
    console.log('---');
  }
}

monitorAll();
