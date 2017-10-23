define(['makeHtml', 'makeImage'], function(makeHtml, makeImage) {

    'use strict';

    function SiteConfig() {
        $('#makeHtml').click(makeHtml.init);
        $('#makeImage').click(makeImage.init);
        $.subscribe('clientMakeHtml', makeHtml.init);
        $.subscribe('clientMakeImg', makeImage.init);
    }

    return SiteConfig;
});
