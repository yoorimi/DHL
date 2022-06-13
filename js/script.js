$(function(){

   const ANI = $('.ani');
			const MOB_LIST = $('.allMenu>li>span')


  $(window).on('load scroll',function(){

			const HEADER = $('.header') //load ,,, down
			const VISU_LENGTH = $('.visual').length;
			const VISU_HEIGHT = $('.visual').outerHeight();
			const H_HEIGHT =HEADER.outerHeight();
			let scroll_Top= $(window).scrollTop()
						

			   // console.log(scroll_Top);
			// 1
			HEADER.addClass('load')

			// 2
				if(VISU_LENGTH>0){

						if(scroll_Top>= VISU_HEIGHT- H_HEIGHT){
							HEADER.addClass('down');
						}
						else{
							
							HEADER.removeClass('down');
						}

				}


			


		})


	visu();
	allMenu();

	  function visu(){

				// 키워드 정의
   const SLIDER = $('.visual .slider li');//On slider
			const NAV =$('.visu_Nav li')//active  navigation

			let s_Num = SLIDER.length; //slider 개수
			let idx =0; //첫번째 번호

			first();//첫번째 함수 실행
			setInterval(visual,6000);//시간차 6초에 한번씩 visual 함수 실행

			NAV.click(nav) //navigation 클릭시 nav 함수 실행
			

			// nav함수
   function nav(e){
				e.preventDefault();
	
	
					const i = $(this).index() //현재 순서값 저장 
					reset(); //기본값으로 변경
	
					SLIDER.eq(i).addClass('On'); //현재 순서값에 맞게 클래스 붙이기
					NAV.eq(i).addClass('active');//현재 순서값에 맞게 클래스 붙이기
	

			}

			// 첫번째 함수
			function first(){
				
				// idx=0이기에 0 번에 불이 켜진다
				SLIDER.eq(idx).addClass('On');
				NAV.eq(idx).addClass('active');
				
			}
			
			function visual(){
				reset()

				idx++;//idx= 0+1, 
				if(idx==s_Num){//idx와 slider 개수가 같아지면
					idx=0; //idx는 0이 된다
				}
			

			SLIDER.eq(idx).addClass('On');  //idx 순서값에 class 붙이기
				NAV.eq(idx).addClass('active');//idx 순서값에 class 붙이기

			}

			// 기본값 세팅
			function reset(){
				// 전체 다 remove 해줌
				SLIDER.removeClass('On');
				NAV.removeClass('active');
			}

		}

  function allMenu(){


				const HEADER = $('.header') //active
				const H_BTN =$('.btn_all_menu')


				H_BTN.click(function(e){
						e.preventDefault()

						// HEADER.toggleClass('active')
						
						if(HEADER.hasClass('active')==false){
									HEADER.addClass('active')
									
								}
								
								else{
								HEADER.removeClass('active')

							}



				})

				MOB_LIST.click(function(){
					if($(this).parent('li').hasClass('On')){
						$(this).parent('li').removeClass('On')
						$(this).siblings('ul.depth2').slideUp(300)


					}
					else{
						$(this)
						.parent('li')
						.addClass('On')
						.siblings()
						.removeClass('On')
						.find('ul.depth2')
						.slideUp(300)

						$(this).siblings('ul.depth2').slideDown(300)
					}

				})




		}  


   $(window).on('load resize',function(){
					if(window.innerWidth > 1100){
						MOB_LIST.siblings('ul.depth2').removeAttr('style')
						MOB_LIST.parent('li').removeClass('On');
					}

			})








		$.fn.aniMoving = function() {//사용자 정의 메소드 
			let elementTop = $(this).offset().top;  //선택한 요소의 Y축 좌표값
			let elementBottom = elementTop + $(this).outerHeight();//Y축 좌표값+현재요소의 높이값  

			let viewportTop = $(window).scrollTop();//화면의 스크롤값
		
			let viewportBottom = viewportTop + $(window).height();//스크롤값+화면의 높이

			// 이값들을 사용자정의 함수에 돌려준다
			//현재요소의 하단 끝까지의 높이값 > 화면의 스크롤값 그리고  0.2 그리고 선택요소의 Y좌표값<스크롤값+화면높이


			//영역으로 들어온 상태  + 영역을 벗어난상태
			return ( viewportTop < elementBottom)  && (elementTop < viewportBottom ) ;
	};

		
		
  $(window).on('load resize scroll',function(){

			
			
			ANI.each(function(){//각각의 ani를 찾는다 
				if($(this).aniMoving()){
								$(this).addClass('moving');
				}
				else{
								$(this).removeClass('moving');

				}
});

			
		})





})