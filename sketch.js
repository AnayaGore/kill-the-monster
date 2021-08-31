const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world;
var ground;
var hero, heroImg;
var sktImg;

function preload() {
//preload the images here
heroImg.loadImage("images/hero.png");
skyImg.loadImage("images/sky.jpg");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create()
  world = engine.world
  // create sprites here

}

function draw() {
  background(0);

}

