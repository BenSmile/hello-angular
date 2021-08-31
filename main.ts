import { LikeComponent } from "./LikeComponent";


let component = new LikeComponent(10, true);
component.onClick();
console.log(`likeCount : ${component.likesCount}, isSelected : ${component.isSelected}`)