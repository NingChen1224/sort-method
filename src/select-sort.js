/*
	by 宁尘 2014-09-30
	bubble sort
	input parameters:array[], sort order, responding field
*/

var common = require('./common');

exports = module.exports = sortMethod;

var sortMethod = {
	obj:null,
	sort:function(obj, asc, field){
		var objType = Object.prototype.toString.call(obj),
			canSort = true;
		if(objType !== "[object Array]"){
			return;
		}
		this.obj = obj;
		canSort = this.validateTypeofElement(this.obj);
		if(canSort){
			if(typeof this.obj[0] == 'object'){
				if(!obj[0][field]){
					return;
				}
				this.sortMethodObj(this.obj,asc,field);
			}else{
				this.sortMethodArray(this.obj,asc);	
			}
		}
	},
	validateTypeofElement:function(){
		return common.validate(this.obj);
	},
	sortMethodArray:function(obj,asc){
		var i, 
			j, 
			len = obj.length,
			temp = null,
			swap = null,
			_asc = true,
			pos = -1;
		asc && _asc = asc;
		//正序
		if(_asc){
			for(i = 0; i < len - 1; i++){
				temp = obj[i];
				for(j = i+1; j < len; j++){
					if(typeof obj[j] === typeof temp){
						if(obj[j] < temp){
							temp = obj[j];
							pos = j;
						}
					}else{
						break;
					}	
				}
				if(pos!=-1){
					obj[i] = obj[pos];
					obj[pos] = temp;
				}
			}
		}else{//逆序
			for(i = 0; i < len - 1; i++){
				temp = obj[i];
				for(j = i+1; j < len; j++){
					if(typeof obj[j] === typeof temp){
						if(obj[j] > temp){
							temp = obj[j];
							pos = j;
						}
					}else{
						break;
					}	
				}
				if(pos!=-1){
					obj[i] = obj[pos];
					obj[pos] = temp;
				}
			}
		}
	},
	sortMethodObj:function(obj,asc,field){	
		var i, 
			j, 
			len = obj.length,
			swap = null,
			_asc = true,
			pos = -1;
		asc && _asc = asc;
		if(_asc){
			for(i = 0; i < len - 1; i++){
				swap = obj[i][field];
				for(j = i+1; j <len; j++){
					if(typeof obj[j][field] === typeof swap){
						if(obj[j][field] < swap){
							swap = obj[j];
							pos = j;
						}
					}else{
						break;
					}
				}
				if(pos!=-1){
					obj[i] = obj[pos];
					obj[pos] = swap;
				}
			}
		}else{
			for(i = 0; i < len - 1; i++){
				swap = obj[i][field];
				for(j = i+1; j <len; j++){
					if(typeof obj[j][field] === typeof swap){
						if(obj[j][field] > swap){
							swap = obj[j];
							pos = j;
						}
					}else{
						break;
					}
				}
				if(pos!=-1){
					obj[i] = obj[pos];
					obj[pos] = swap;
				}
			}
		}
	}
};
