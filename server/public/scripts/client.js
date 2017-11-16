console.log('client.js has been loaded!');
var quoteArray=[]
$(document).ready(function () {
    console.log('jQuery has been loaded!');
    $.ajax({
        method: 'GET',
        url: '/quote/random',
        success: function (response) {
            console.log('random quote response', response.quoteText);
            $('p').text(response);
        },//callback function
        error: function (error) {
            console.log('there was an error getting a random quote', error)
        }
    });
    $.ajax({
        method: 'GET',
        url: '/quote/first',
        success: function (response) {
            console.log('first quote response', response.quoteText);;
            $('p').text(response.quoteText);
        }//callback function
    });
    $('#newQuoteButton').on('click', function () {
        console.log('something');
        $.ajax({
            method: 'POST',
            url: '/quote/new',
            data: { qoute_to_add: $('#newQuote').val(), author_to_add: $('#newAuthor').val()  }//need to connect author_to_add
            success: function (response) {
                console.log('new quote post response', response);
                getAllQuotes();

        }//end.ajax
    });//end function and .on

})
});//end $(document).ready(

function getAllQuotes() {
    $.ajax({
        method: 'GET',
        url: '/quote/all',
        success: function (response) {
            console.log('all quotes array', response)
            $('ul').html('');
            for (let i = 0; i < response.length; i++) {
                $('ul').append('<li>'+response[i].quoteText+'</li>');
            }
            // for (let i = 0; i < response.length; i++) {
            //     for (let j = 0; j < quoteArray.length+1; j++) {
            //         if(response[i]==quoteArray[j]){
            //             console.log(response[i]+'matches'+quoteArray[j])
            //         }else{ quoteArray.push(response[i]);//end else  
            //         }//end else
                //end child for loop j
                
                //end parent for loop i
            
        }//end success:
    }//end object
)//end .ajax
};//end getAllQuotes function