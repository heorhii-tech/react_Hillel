
var Table = function Table(data) {

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'table',
            null,
            React.createElement(
                'tbody',
                null,
                React.createElement(
                    'tr',
                    null,
                    React.createElement(
                        'th',
                        { colSpan: 2, style: { background: 'blue', color: 'white' } },
                        data.data.brand
                    )
                ),
                data.data.models.map(function (model) {
                    return React.createElement(
                        React.Fragment,
                        { key: model.id },
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'td',
                                { style: { background: 'red', width: '70px' }, rowSpan: 2 },
                                ' ',
                                model.name
                            ),
                            model.collection.map(function (item) {

                                return item.id === 1 ? React.createElement(
                                    'td',
                                    { style: { width: '200px' }, key: item.id },
                                    React.createElement(
                                        'ul',
                                        null,
                                        React.createElement(
                                            'li',
                                            null,
                                            'Version: ',
                                            item.version
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            'Year: ',
                                            item.year
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            'Horsepower: ',
                                            item.horsepower
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            'Engine: ',
                                            item.engine
                                        )
                                    )
                                ) : null;
                            })
                        ),
                        model.collection.map(function (item) {
                            return item.id === 2 ? React.createElement(
                                'tr',
                                { key: item.id },
                                React.createElement(
                                    'td',
                                    { key: item.id },
                                    React.createElement(
                                        'ul',
                                        null,
                                        React.createElement(
                                            'li',
                                            null,
                                            'Version: ',
                                            item.version
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            'Year: ',
                                            item.year
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            'Horsepower: ',
                                            item.horsepower
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            'Engine: ',
                                            item.engine
                                        )
                                    )
                                )
                            ) : null;
                        })
                    );
                })
            )
        )
    );
};
export default Table;