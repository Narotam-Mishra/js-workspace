
// Implement a function to execute N async tasks in parallel in JS

async function executeTasksInParallel(tasks){
    await Promise.all(tasks.map(task => task()));
}

// task examples

async function todoTask1(){
    console.log('Task-1 started');
    await delay(1000);
    console.log('Task-1 completed');
}

async function todoTask2(){
    console.log('Task-2 started');
    await delay(1500);
    console.log('Task-2 completed');
}

async function todoTask3(){
    console.log('Task-3 started');
    await delay(500);
    console.log('Task-3 completed');
}

async function todoTask4(){
    console.log('Task-4 started');
    await delay(900);
    console.log('Task-4 completed');
}

async function todoTask5(){
    console.log('Task-5 started');
    await delay(700);
    console.log('Task-5 completed');
}

// Utility function to simulate asynchronous delay
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

// call the main executeTasksInParallel(tasks) function
executeTasksInParallel([todoTask1, todoTask2, todoTask3, todoTask4, todoTask5]);
