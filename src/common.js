/*
	by 宁尘
*/
exports = module.exports = common;

var common = {
	validate:function(obj){
		var flag = true，
			eleType = '',
			eleObjCount = 0;
		obj.forEach(function(ele,index){
			eleType = Object.prototype.toString.call(ele);
			if(eleType !== '[object Number]' && eleType !== '[object String]'){
				if(eleType === "[object Object]"){
					eleObjCount++;
				}else{
					flag = false;
					return false;
				}
			}
		});
		if(eleObjCount==obj.length){
			flag = true;
		}
		return flag;	
	}
};