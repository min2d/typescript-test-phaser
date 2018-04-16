class Game extends Phaser.Game {

	constructor() {
		super(800, 450, Phaser.AUTO, 'content', null);
        this.state.add('MyState',MyState, false);
        this.state.start('MyState');
	}

}