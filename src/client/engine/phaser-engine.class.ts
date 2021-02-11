import { UPDATE_PRIORITY } from "pixi.js";

export class PhaserSpaceGame extends Game implements LifeCycle
{
    private game: Phaser.Game;
}

constructor() {
    this.game = new Phaser.Game(1024, 768, Phaser.Auto, 'space-shooter', {
        preload: this.preload,
        create: this.create,
        update: this.update
    });
}

public preload(): void {
    this.game.load.crossOrigin = 'anonymous';
    this.game.load.image('space', 'assets/background.jpeg');
    this.game.load.image('laser', 'assets/bullet.png');
    this.game.load.spritesheet('dust', 'assets/dust.png', 64, 64, 16);
    this.game.load.spritesheet('kaboom', 'assets/explosions.png', 64, 64, 16);
    this.game.load.image('pickup', 'assets/pickup.png');
    this.game.load.spritesheet('shooter-sprite', 'assets/ship.png', 32, 32);
}

public create(): void {
    super.properties(this.game);
    super.manageAssets(this.game);
}

public update(): void {
    super.gameUpdate(this.game);
}

export interface LifeCycle {
    preload(): void;
    create(): void;
    update(): void;
}

import { Game } from "../game/game.class";
import { LifeCycle } from "./lifecycle";

export class PhaserSpaceGame extends Game implements LifeCycle {
    private game: Phaser.game;

    constructor() {
        super();
        this.game = new Phaser.Game(1024, 768, Phaser.Auto, 'space-shooter', {
            preload: this.preload,
            create: this.create,
            update: this.update
        });
    }
        
    public preload(): void {
        const game = this.game.load:
        game.crossOrigin = 'anonymous';
        game.image('space', 'assets/background.jpeg');
        game.image('laser', 'assets/bullet.png');
        game.spritesheet('dust', 'assets/dust.png', 64, 64, 16):
        game.spritesheet('kaboom', 'assets/explosions.png', 64, 64, 16);
    }

}