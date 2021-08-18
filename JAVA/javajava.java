binary semaphore lock = 0

semaphore fillCount = 0;
//items produced semahore emptyCount = BUFFER_SIZE;
//remaining space 
procedure producer()
{
while (True) /
{   

while(Test_And_Set(lock)); //loop until the lock is not zero

item = produceItem();
down(emptyCount);

//emptyCount is decremented
putItemIntoBuffer(item);
up(fillCount);
/fillcount is incremented

//release the lock
lock = 0; 
}
}


procedure consumer()
{
while (true)
{   

//loop till lock is not 0
while (Test_And_Set(lock)); 
down(fillCount);
item = removeItem();

//emptyCount is incremented
up(emptyCount); 
consumeItem(item);

//release the lock
lock = 0; 
}
}