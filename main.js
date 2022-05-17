(function($){
    $.fn.modalZoom = function(options) {

        let caption = "",
            description = "",
            src = "";

        let ShowModal = function(){
            let modal_element = $('<div class="modal image-zoom-modal" tabindex="-1" role="dialog" id="DonationModal"></div>'),
                dialog_element = $('<div class="modal-dialog modal-fit-content" role="document"></div>'),
                content_element = $('<div class="modal-content"></div>'),
                body_element = $('<div class="modal-body mt-4"></div>'),
                src_element = $('<img class="image-zoom-out">'),
                caption_element = $('<h4 class="image-zoom-caption">' + caption + '</h4>'),
                description_element = $('<p class="image-zoom-description">' + description + '</p>'),
                close_element = $('<button type="button" class="close modal-close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>');

            close_element.css({
                position: "absolute",
                right: "5px",
                opacity: 1
            });
            if(src.length > 0)
            {
                src_element.attr("src", src);
                body_element.append(src_element);
            }
            if(caption.length > 0)
                body_element.append(caption_element);
            if(src.length > 0)
                body_element.append(description_element);

            content_element.append(close_element);
            content_element.append(body_element);
            dialog_element.append(content_element);
            modal_element.append(dialog_element);

            $("body").append(modal_element);
            modal_element.modal("show");
        };

        let build = function (e) {
            /**
             * Build the modal using the dom element data items
             */
            $(e).on("click", function () {
                caption = $(this).attr("data-caption");
                description = $(this).attr("data-description");
                src = $(this).attr("data-src");
                ShowModal();
            });

            /**
             * Close the modal if zoom-out image is clicked
             */
            $(document).on("click", ".image-zoom-out", function () {
               $(document).find(".modal").modal("hide");
            });

            /**
             * Remove the modal from DOM
             */
            $(document).on("hidden.bs.modal", ".image-zoom-modal", function () {
               $(this).remove();
            })
        };

        return this.each(function() {
            return new build(this);
        });

    };
})(jQuery);

$(document).ready(function () {
    $(document).find('[data-toggle="image-zoom"]').modalZoom();
});
