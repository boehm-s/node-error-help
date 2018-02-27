function main() {
    console.log("HEY YOU");
    const n = Math.random();
    console.log(`ERROR ! ${n}`);
    throw new Error(`ERROR ! ${n}`);
};

setInterval(() => {
    try {
	main();
    } catch(e) {
	console.error(e);
    }
}, 1500);
