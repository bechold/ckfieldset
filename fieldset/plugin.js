CKEDITOR.plugins.add('fieldset', {
    requires: 'widget',
    icons: 'fieldset',
    init: function (editor) {
        editor.ui.addButton('Fieldset', {
            label: 'Fieldset',
            command: 'Fieldset',
            icon: this.path + 'icons/fieldset.png'
        });
        editor.widgets.add('Fieldset', {
            button: 'Fieldset',
            template: '<fieldset>' +
                '<legend class="fieldset-legend">Überschrift</legend>' +
                '<div class="fieldset-text"></div>' +
                '</fieldset>',
            editables: {
                legend: {
                    selector: 'legend.fieldset-legend'
                },
                text: {
                    selector: '.fieldset-text'
                }
            },
            allowedContent: 'p a div span h2 h3 h4 h5 h6 section article iframe object embed strong b i em cite pre blockquote small sub sup code ul ol li dl dt dd table thead tbody th tr td img caption mediawrapper br[href,src,target,width,height,colspan,span,alt,name,title,class,id,data-options]{text-align,float,margin,width,height,border}(*);',
            upcast: function (element) {
                return element.name === 'fieldset' ? element : false;
            }
        });
        CKEDITOR.dtd.$editable.legend = 1;
    }
});