var enums = require( "../src/enums.js" );

describe( "Enum", function() {
	it( "can have symbols with custom properties", function() {
		var color = new enums.Enum( {
			red: { de: "rot" },
			green: { de: "grün" },
			blue: { de: "blau" }
		} );
		function translate( c ) {
			return c.de;
		}
		expect( translate( color.green ) ).toEqual( "grün" );
	} );

	it( "can check for symbol membership", function() {
		var color = new enums.Enum( "red", "green", "blue" );
		var fruit = new enums.Enum( "apple", "banana" );
		expect( color.contains( color.red ) ).toBeTruthy();
		expect( color.contains( fruit.apple ) ).toBeFalsy();
	} );

	describe( "with values", function() {
		var roles = new enums.Enum( {
			None: {
				value: 0,
				description: "No Access"
			},
			BoardAdministrator: {
				value: 4,
				description: "Administrator"
			},
			BoardCreator: {
				value: 5,
				description: "Board Creator"
			}
		} );

		it( "can lookup by value", function() {
			expect( roles.fromValue( 0 ) ).toEqual( roles.None );
			expect( roles.fromValue( 4 ) ).toEqual( roles.BoardAdministrator );
			expect( roles.fromValue( 5 ).description ).toEqual( "Board Creator" );
		} );

		it( "failed lookup is undefined", function() {
			expect( roles.fromValue( 1 ) ).toBeUndefined();
		} );

		it( "enum == the value", function() {
			expect( roles.BoardAdministrator == 4 ).toBeTruthy();
		} );

		it( "enum !== value", function() {
			expect( roles.BoardAdministrator === 4 ).toBeFalsy();
		} );
	} );
} );

