$(function () {
    if(window.innerWidth < 1270){
        $(".sidebar").removeClass("show")
        $(".main").removeClass("sidebar-active")
    }
    else{
        $(".sidebar").addClass("show")
        $(".main").addClass("sidebar-active")
    }
    
    $(".nav-toggle-btn").click(()=>{
        $(".sidebar").toggleClass("show")
        $(".main").toggleClass("sidebar-active")
    })


    $(".total-balance-item .item-icon").click(function(e){
        $(".balance-popup").toggleClass("show");
        $(".main-overlay").toggleClass("show");
        $(".sidebar-overlay").toggleClass("show");
        $(".sidebar").toggleClass("overflow-v")
    })
    $(".method-btn").click(function(e){
        $(this).next().toggleClass("show");
        $(".body-overlay").toggleClass("show");
    })
    $("#login-btn").click(function(e){
        e.preventDefault();
        $(".login-popup").toggleClass("show");
    })
    $(".body-overlay").click(function(e){
        $(".login-popup").removeClass("show");
        $(".body-overlay").removeClass("show");
        $(".exchange-methods").removeClass("show");
        $(".sidebar-overlay").removeClass("show");
        $(".popup").removeClass("show");
        $(".sidebar").removeClass("overflow-v")
    })
    $(".main-overlay").click(function(e){
        $(".login-popup").removeClass("show");
        $(".body-overlay").removeClass("show");
        $(".main-overlay").removeClass("show");
        $(".sidebar-overlay").removeClass("show");
        $(".exchange-methods").removeClass("show");
        $(".popup").removeClass("show");
        $(".sidebar").removeClass("overflow-v")
    })
    $(".sidebar-overlay").click(function(e){
        $(this).removeClass("show")
        $(".login-popup").removeClass("show");
        $(".body-overlay").removeClass("show");
        $(".main-overlay").removeClass("show");
        $(".popup").removeClass("show");
        $(".sidebar").removeClass("overflow-v")
    })
    

    $(".popup-steps .popup-step").click(function(e){
        const clickedStep = this.id
        $(this).prev().prev().addClass("completed")
        $(this).prev().addClass("completed")
        $(this).addClass("active")
        $(this).removeClass("completed")
        $(this).next().removeClass("active")
        $(this).next().removeClass("completed")
        $(".popup-steps-content").find(".step-content").addClass("d-none");
        $(".popup-steps-content").find("#"+clickedStep).removeClass("d-none");
    })

    // Copy Address to Clipboard 
    $(".address-copy-icon").click(function(e){
        e.preventDefault()
        const address = $(this).prev();
        navigator.clipboard.writeText($(address).text());
        const text = $(address).text();
        $(address).text("Copied!")
        setTimeout(() => {
            $(address).text(text)
        }, 1500);

    })

    // Coinbase wallet option tabs 
    $(".connection-option-tabs .option-tab").click(function(e){
        $(".connection-option-tabs .option-tab").removeClass("active")
        $(this).addClass("active")
        const clickedOption = this.id
        $(".connect-coinbase .connection-options").find(".connection-option").addClass("d-none")
        $(".connect-coinbase .connection-options").find("#"+clickedOption).removeClass("d-none")
    })

    // Like Button script
    $(".favourite-btn").click(function(e){
        $(this).find(".btn-icon img").toggleClass("d-none")
    })

    $(".exchange-method.method").click(function(e){
        const methodcontent = $(this).html();
        $(".method-btn").html(methodcontent)
    })

    $(".popup-toggle").click(function(e){
        e.preventDefault()
        $(this).parent().parent().find(".popup").toggleClass("show")
        $(".body-overlay").toggleClass("show")
        $(".main-overlay").removeClass("show")
    })
    $(".mobile-popup-toggle").click(function(e){
        e.preventDefault()
        $(this).parent().parent().parent().next().toggleClass("show")
    })
    $(".profile-popup-toggle").click(function(e){
        e.preventDefault()
        $(this).parent().parent().find(".popup").toggleClass("show")
    })

    $(".exchange .remove-icon").click(function(){
        $(this).parent().remove();
    })

    $(".sidebar-popup .close-icon").click(function(){
        $(".sidebar-popup").removeClass("show")
    })
    $(".card-menu-btn").click(function(){
        $(this).next().toggleClass("show")
    })
    $(".wallet-toggle .wallet-mode").click(function(){
        window.location.replace("index-logedin-wallet.html");
    })
    $(".wallet-toggle .exchange-mode").click(function(){
        window.location.replace("./index-logedin.html");
    })

    $(".exchanges-con .exchange").click(function(){
        $(this).toggleClass("selected")
    })

    if(document.querySelector(".notification-popup")){
        setTimeout(() => {
            $(".notification-popup").toggleClass("show")
            $(".body-overlay").addClass("show");
        }, 3000);
    }
    
    $(".notification-popup .close-btn").click(function(){
        $(".notification-popup").removeClass("show")
        $(".body-overlay").removeClass("show");
    })
    $(".notification-popup .close-link").click(function(e){
        e.preventDefault()
        $(".notification-popup").removeClass("show")
        $(".body-overlay").removeClass("show");
    })

    $(".reminder-close-btn").click(function(e){
        e.preventDefault()
        $(this).parent().parent().parent().remove();
    })

    $(".wallet-dropdown .dropdown-item").click(function(e){
        $(".wallet-dropdown .dropdown-btn").html($(this).html())
    })

    $(".connect-coinbase-btn").click(function(){
        $(this).toggleClass("active")
        $(this).next().toggleClass("show")
    })

    $(".show-pass-icon").click(function(){
        if($(this).prev().attr("type") == "password"){
            $(this).prev().attr("type", "text")
        }
        else{
            $(this).prev().attr("type", "password")
        }
    })

    $(".norm-popup-toggle").click(function(e){
        e.preventDefault()
        $(this).next().toggleClass("show")
        $(this).toggleClass("active")
    })
    $(document).click(function(event) {
        if (!$(event.target).closest('.strategies-dropdown-con, .strategy_dropdown').length) {
          $('.strategy_dropdown').removeClass('show');
          $(".strategy-drop-btn").removeClass("active")
        }
        if (!$(event.target).closest('.norm-popup-toggle, .norm-popup').length) {
          $('.norm-popup').removeClass('show');
          $(".norm-popup-toggle").removeClass("active")
        }
    });

    $(".str-dropdown-item").click(function(e){
        $(".strategy-drop-btn .btn-text").text($(this).html())
        
    })

    if(document.querySelector(".dual-range")){
        rangeSlider();
    }

    var activityFlterBtns = document.querySelectorAll(".activity_tab .filter_btn")
    var activeFlterBtns = document.querySelectorAll(".activity_tab .filter_btn.button-primary")
    if(activeFlterBtns.length > 1){
        activityFlterBtns.forEach(function(element){
            setTimeout(() => {
                if(!element.classList.contains("button-primary")){
                    $(".swap_row."+element.getAttribute('data-target')).addClass("d-none");
                }else{
                    $(element).find(".check-icon").removeClass("d-none")
                    $(".swap_row."+element.getAttribute('data-target')).removeClass("d-none");
                }
            }, 200);
        })
    }

    $(".exchangePopUpBtn").click(function(){
        $(".login-popup").toggleClass("show");
        $(".popup-steps .popup-step#step-2").click()
    })
    
})


if(document.querySelector(".dropdown__options-filter")){
	// Change option selected
$(".dropdown__options-filter").click(function(){
	const options = Array.from(document.querySelectorAll('.dropdown__select-option'))
	
	options.forEach((option) => {
		option.addEventListener('click', function() {
			$(this).parent().parent().prev().html(option.innerHTML);
		})
	})
})

// Close dropdown onclick outside
document.addEventListener('click', (e) => {
	const toggle = document.querySelector('.dropdown__switch')
	const element = e.target

	if (element == toggle) return;

	const isDropdownChild = element.closest('.dropdown__filter')		
	
	if (!isDropdownChild) {
		toggle.checked = false
	}
})

}


// SET METER VALUE 
$( document ).ready(function() {
        var meterValue = 120;
        if(meterValue<= 180){
            $('#barometer').barometer({
              startvalue: meterValue
            });
        }
        if(meterValue < 90 && meterValue> -181){
            $(".pie_segment.red").css({'transform':'rotate(-' + meterValue + 'deg)'})
            $(".pie_segment.green").css({'transform':'rotate(' + meterValue + 'deg)'})
        }
        else if(meterValue > 90 && meterValue < 130){
            $(".pie_segment.red").css({'transform':'rotate(-' + (meterValue - 90) + 'deg)'})
            $(".pie_segment.green").css({'transform':'rotate(' + meterValue + 'deg)'})
        }
        else if(meterValue > 130 && meterValue < 181){
            $(".pie_segment.red").css({'transform':'rotate(-' + (meterValue - meterValue) + 'deg)'})
            $(".pie_segment.green").css({'transform':'rotate(' + meterValue + 'deg)'})
        }
});


let minPriceVal = "";
let maxPriceVal = "";
let dualRange = ''
function rangeSlider() {
    dualRange = new dualRangeSlider(document.querySelector(".dual-range"));
    dualRange.moveHandle(1, $("#investmentInput").val());
}
class dualRangeSlider {
    constructor(rangeElement) {
        this.range = rangeElement;
        this.min = Number(rangeElement.dataset.min);
        this.max = Number(rangeElement.dataset.max);
        this.handles = [...this.range.querySelectorAll(".handle")];
        this.startPos = 0;
        this.activeHandle;

        this.handles.forEach((handle) => {
        handle.addEventListener("mousedown", this.startMove.bind(this));
        handle.addEventListener("touchstart", this.startMoveTouch.bind(this));
        });

        window.addEventListener("mouseup", this.stopMove.bind(this));
        window.addEventListener("touchend", this.stopMove.bind(this));
        window.addEventListener("touchcancel", this.stopMove.bind(this));
        window.addEventListener("touchleave", this.stopMove.bind(this));

        const rangeRect = this.range.getBoundingClientRect();
        const handleRect = this.handles[0].getBoundingClientRect();
        this.range.style.setProperty("--x-1", "0px");
        this.range.style.setProperty(
        "--x-2",
        rangeRect.width - handleRect.width / 2 + "px"
        );
        this.handles[0].dataset.value = this.range.dataset.min;
        this.handles[1].dataset.value = this.range.dataset.max;
    }

    startMoveTouch(e) {
        const handleRect = e.target.getBoundingClientRect();
        this.startPos = e.touches[0].clientX - handleRect.x;
        this.activeHandle = e.target;
        this.moveTouchListener = this.moveTouch.bind(this);
        window.addEventListener("touchmove", this.moveTouchListener);
    }

    startMove(e) {
        this.startPos = e.offsetX;
        this.activeHandle = e.target;
        this.moveListener = this.move.bind(this);
        window.addEventListener("mousemove", this.moveListener);
    }

    moveTouch(e) {
        this.move({ clientX: e.touches[0].clientX });
    }

    move(e) {
        const isLeft = this.activeHandle.classList.contains("left");
        const property = isLeft ? "--x-1" : "--x-2";
        const parentRect = this.range.getBoundingClientRect();
        const handleRect = this.activeHandle.getBoundingClientRect();
        let newX = e.clientX - parentRect.x - this.startPos;
        if (isLeft) {
            const otherX = parseInt(this.range.style.getPropertyValue("--x-2"));
            newX = Math.min(newX, otherX - handleRect.width);
            newX = Math.max(newX, 0 - handleRect.width / 2);
        } else {
            const otherX = parseInt(this.range.style.getPropertyValue("--x-1"));
            newX = Math.max(newX, otherX + handleRect.width);
            newX = Math.min(newX, parentRect.width - handleRect.width / 2);
        }
        this.activeHandle.dataset.value = this.calcHandleValue(
            (newX + handleRect.width / 2) / parentRect.width
        );
        this.range.style.setProperty(property, newX + "px");
        if(document.querySelector("#investmentInput")){
            if (isLeft) {
                minPriceVal = this.activeHandle.dataset.value;
                document.querySelector("#investmentInput").value = (maxPriceVal - minPriceVal)
            } else {
                maxPriceVal = this.activeHandle.dataset.value;
                document.querySelector("#investmentInput").value = (maxPriceVal - minPriceVal)
            }
        }
        if(document.querySelector(".aum_Range")){
            if (isLeft) {
                minPriceVal = this.activeHandle.dataset.value;
                document.querySelector(".minAum_Range").innerHTML = (maxPriceVal - minPriceVal)
            } else {
                maxPriceVal = this.activeHandle.dataset.value;
                document.querySelector(".maxAum_Range").innerHTML = (maxPriceVal - minPriceVal)
            }
        }
    }

    calcHandleValue(percentage) {
        return Math.round(percentage * (this.max - this.min) + this.min);
    }

    stopMove() {
        window.removeEventListener("mousemove", this.moveListener);
        window.removeEventListener("touchmove", this.moveTouchListener);
    }

    moveHandle(handleIndex, value) {
        const handle = this.handles[handleIndex];
        const parentRect = this.range.getBoundingClientRect();
        const handleRect = handle.getBoundingClientRect();
      
        // Calculate the percentage of the handle's position based on the value
        const percentage = (value - this.min) / (this.max - this.min);
      
        // Set the handle's position
        const property = handleIndex === 0 ? "--x-1" : "--x-2";
        const newX = percentage * parentRect.width - handleRect.width / 2;
        this.range.style.setProperty(property, newX + "px");
      
        // Update the handle's value
        handle.dataset.value = value;
    }
}


$("#investmentInput").on("input", function(){
    if($(this).val() <= Number(document.querySelector(".dual-range").dataset.max)){
        dualRange.moveHandle(1, $(this).val());
    }
})


$(window).on('shown.bs.modal', function() { 
    dualRange.moveHandle(1, $("#investmentInput").val());
});

// Search filter script 
$(document).ready(function(){
    // FAQ Search Filter 
    $("#faqSearch").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#faqAccordion .accordion-item").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });

    // Community Vault table Search Filter 
    $("#leaderboardSearch").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".leaderboard-table .table-row").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });

    if(document.querySelector(".aum_Range")){
        $(".filters-btn-con .filters-btn, .sub-dropdown-btn").click(()=>{
            if($(".aum_Range .minAum_Range").val() >= Number(document.querySelector(".dual-range").dataset.min)){
                dualRange.moveHandle(0, $(".aum_Range .minAum_Range").html());
            }
            if($(".aum_Range .minAum_Range").val() <= Number(document.querySelector(".dual-range").dataset.max)){
                dualRange.moveHandle(1, $(".aum_Range .maxAum_Range").html());
            }
        })
    }
    if(document.querySelector(".filter-dropdown")){
        $(".close-dropdown-btn").click(()=>{
            $(".filter-dropdown").removeClass("show")
            $(".filters-btn").removeClass("active")
        })
    }

});
  
$(".leaderboard-table .table-row").click(function(){
    window.location.replace("./community-vaults-detail.html");
})


  $(".faq-content-con .page-tab-btn").click(function(e){
    $(".faq-content-con .page-tab-btn").removeClass("active")
    $(this).addClass("active")
    $(".accordion-item").hide()
    $(".accordion-item."+this.id).show()
  })

//   Filter button Jquery start
$(document).ready(function() {
    $('.filter_btn').click(function() {
      $(this).toggleClass('button-primary');
    });
  });
//   Filter button Jquery end

$(".activity_tab .filter_btn").click(function(e){
    $(this).find(".check-icon").toggleClass("d-none")
    var activityFlterBtns = document.querySelectorAll(".activity_tab .filter_btn")
    activityFlterBtns.forEach(function(element){
        setTimeout(() => {
                var activeFilterBtns = document.querySelectorAll(".activity_tab .filter_btn.button-primary")
                if(!element.classList.contains("button-primary")){
                    if(activeFilterBtns.length == 0){
                        $(".swap_row").removeClass("d-none");
                    }else{
                        $(".swap_row."+element.getAttribute('data-target')).addClass("d-none");
                    }
                }else{
                    $(".swap_row."+element.getAttribute('data-target')).removeClass("d-none");
                }
            }, 200);
    })

})