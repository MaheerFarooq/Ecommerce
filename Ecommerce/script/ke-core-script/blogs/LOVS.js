$(document).ready(function () {
    let $jsLovDescription = $('#js-lov-description');
    let $categoryDropdown = $('#category-dropdown');
    let $jsBtnBlogLovAdd = $('.js-btn-blog-lov-add');
    let selectedItemKey = null;
    $(document).on('click', '.js-btn-blog-lov-add', function () {
        if ($jsLovDescription.val() !== '') {
            $categoryDropdown = $('#category-dropdown');
            let data = {
                'description': $jsLovDescription.val(),
                'parent_id': $categoryDropdown.val()
            };
            if ($jsBtnBlogLovAdd.attr('data-update') === 'yes') {
                data['id'] = selectedItemKey;
            }
            $.ajax({
                type: 'POST',
                url: '/blogs/create-lovs',
                data: data,
                success: function (data) {
                    $jsLovDescription.val('');
                    $('.js-category-table').html(data);
                    toast('Lov has been added', 'OKAY');
                    updateCategoryDropdown();
                    selectedItemKey = null;
                    $('.js-btn-blog-lov-add').html('Create');
                }
            });
        } else {
            toast('Add some text too!', 'OKAY')
        }
        return
    });
    $(document).on('click', '.js-btn-lov-edit', function (ev) {
        $categoryDropdown = $('#category-dropdown');
        $categoryDropdown.val(ev.currentTarget.getAttribute('data-parent-key'));
        $jsLovDescription.val(ev.currentTarget.getAttribute('data-key-description'));
        selectedItemKey = ev.currentTarget.getAttribute('data-key');
        componentHandler.upgradeDom();
        $('.js-btn-blog-lov-add').html('Update');
        $jsBtnBlogLovAdd.attr('data-update', 'yes');
    });

    $(document).on('click', '.js-btn-lov-delete', function (ev) {
        let data = {
            'id': ev.currentTarget.getAttribute('data-key'),
            'delete': true
        };
        $.ajax({
            type: 'POST',
            url: '/blogs/create-lovs',
            data: data,
            success: function (data) {
                $('.js-category-table').html(data);
                toast('Lov has been soft Deleted', 'OKAY');
            }
        });
    });
});


function updateCategoryDropdown() {
    $.ajax({
        type: 'GET',
        url: '/blogs/create-lovs',
        data: {},
        success: function (data) {
            $('.js-category-dropdown-html').html(data);
            componentHandler.upgradeDom();
        }
    });
}
