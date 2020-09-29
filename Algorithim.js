function isTouching(object1, object2){
    if(object1.x-fixedRect.x <= object1.width/2+object2.width/2&&
      object2.x-object1.x<=object1.width/2+object2.width/2 &&
      object1.y-object2.y<=object1.height/2+object2.height/2 &&
      object2.y-object1.y<=object1.height/2+object2.height/2){
        return true;
     /* movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
      movingRect.velocityX=movingRect.velocityX *(-1)
      fixedRect.velocityX=fixedRect.velocityX *(-1)*/
    }else{
      return false;
     // movingRect.shapeColor = "blue";
      //fixedRect.shapeColor = "blue";
    }
  }
  
  function bounceOff(object1,object2){
    if(object1.x-fixedRect.x <= object1.width/2+object2.width/2&&
      object2.x-object1.x<=object1.width/2+object2.width/2 &&
      object1.y-object2.y<=object1.height/2+object2.height/2 &&
      object2.y-object1.y<=object1.height/2+object2.height/2){
      object1.velocityX=object1.velocityX*(-1)
      object2.velocityX=object2.velocityX*(-1)
      }
  else{
    object1.velocityX=object1.velocityX
    object2.velocityX=object2.velocityX
  
  
  }
    
  }
                                                                                      