$(function (){
		var temp = ' ';
		var pre = ' ';
		var oper = ' ';


		$('#btn1').on('click',function(){
			if(temp === 0){
				temp = '1';
				render();
			}else{temp = temp*10 + 1
				render();
			}

		});

		$('#btn2').on('click',function(){
			if(temp === 0){
				temp = '2';
				render();
			}else{temp = temp*10 + 2
				render();
			}
		});

		$('#btn3').on('click',function(){
			if(temp === 0){
				temp = '3';
				render();
			}else{temp = temp*10 + 3
				render();
			}
		});

		$('#btn4').on('click',function(){
			if(temp === 0){
				temp = '4';
				render();
			}else{temp = temp*10 + 4
				render();
			}
		});

		$('#btn5').on('click',function(){
			if(temp === 0){
				temp = '5';
				render();
			}else{temp = temp*10 + 5
				render();
			}
		});

		$('#btn6').on('click',function(){
			if(temp === 0){
				temp = '6';
				render();
			}else{temp = temp*10 + 6
				render();
			}
		});

		$('#btn7').on('click',function(){
			if(temp === 0){
				temp = '7';
				render();
			}else{temp = temp*10 + 7
				render();
			}
		});

		$('#btn8').on('click',function(){
			if(temp === 0){
				temp = '8';
				render();
			}else{temp = temp*10 + 8
				render();
			}
		});

		$('#btn9').on('click',function(){
			if(temp === 0){
				temp = '9';
				render();
			}else{temp = temp*10 + 9
				render();
			}
		});

		$('#btn0').on('click',function(){
			if(temp === 0){
				temp = '0';
				render();
			}else{temp = temp*10 + 0
				render();
			}
		});

    $('#plus').on('click',function(){
        if (temp !== 0&&pre ==0){
        pre = temp;
        oper = '1'
        update()
        render();
    }else if(temp !==0&&pre!==0) {
        pre += temp ;
        temp = ""
        oper = '1'
        update()
        render();
        
        }
    });


    $('#minus').on('click',function(){
        if (temp !== 0&&pre ==0){
        pre = temp;
        oper = '2'
        update()
        render();
    }else if(temp !==0&&pre!==0) {
        pre = pre - temp ;
        temp = ""
        oper = '2'
        update()
        render();
        
        }
    });


    $('#multiply').on('click',function(){
        if (temp !== 0&&pre ==0){
        pre = temp;
        oper = '3'
        update()
        render();
    }else if(temp !==0&&pre!==0) {
        pre = pre*temp ;
        temp = ""
        oper = '3'
        update()
        render();
        
        }
    });


    $('#divide').on('click',function(){
        if (temp !== 0&&pre ==0){
        pre = temp;
        oper = '4'
        update()
        render();
    }else if(temp !==0&&pre!==0) {
        pre = pre/temp ;
        temp = ""
        oper = '4'
        update()
        render();
        
        }
    });


    $('#equal').on('click',function(){
        if (oper == 1){
        pre = temp;
        oper = '1'
        render();
    }else if(temp !==0&&pre!==0) {
        pre += temp ;
        temp = ""
        oper = '1'
        render();
        
    }else if(oper == 2){
    	pre = pre - temp;
    	temp = ""
    	oper = '2'
    	render();

    }else if(oper == 3){
    	pre = pre*temp;
    	temp = ""
    	oper = '3'
    	render();

    }else if(oper == 4){
    	pre = pre/temp;
    	temp = ""
    	oper = '4'
    	render();
    }

    });

    $('#clear').on('click',function(){
           pre = '';
           temp = '';
           render();
            });
        
	function render(){
	$('#ans').text(temp);	
	}
    function update(){
        $('#ans').text(pre);
        temp = '';
        
    }
});