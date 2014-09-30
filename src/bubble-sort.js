/*
	by 宁尘 2014-09-30
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
			swap = null,
			_asc = true;
		asc && _asc = asc;
		if(_asc){
			for(i = 0; i < len - 1; i++){
				for(j = i+1; j < len; j++){
					if(typeof obj[j] == typeof obj[i]){
						if(obj[j] < obj[i]){
							swap = obj[j];
							obj[j] = obj[i];
							obj[i] = swap;
						}
					}else{
						break;
					}
				}
			}
		}else{
			for(i = 0; i < len - 1; i++){
				for(j = i+1; j < len; j++){
					if(typeof obj[j] == typeof obj[i]){
						if(obj[j] > obj[i]){
							swap = obj[j];
							obj[j] = obj[i];
							obj[i] = swap;
						}
					}else{
						break;
					}
				}
			}
		}
	},
	sortMethodObj:function(obj,asc,field){	
		var i, 
			j, 
			len = obj.length,
			swap = null,
			_asc = true;
		asc && _asc = asc;
		if(_asc){
			for(i = 0; i < len - 1; i++){
				for(j = i+1; j < len; j++){
					if(typeof obj[j][field] == typeof obj[i][field]){
						if(obj[j][field] < obj[i][field]){
							swap = obj[j];
							obj[j] = obj[i];
							obj[i] = swap;
						}
					}else{
						break;
					}
				}
			}
		}else{
			for(i = 0; i < len - 1; i++){
				for(j = i+1; j < len; j++){
					if(typeof obj[j][field] == typeof obj[i][field]){
						if(obj[j][field] > obj[i][field]){
							swap = obj[j];
							obj[j] = obj[i];
							obj[i] = swap;
						}
					}else{
						break;
					}
				}
			}
		}
	}
};
