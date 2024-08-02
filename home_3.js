function christmasTree(height) {
    for (let i = 0; i < height; i++) {
        let stars = '';
        for (let j = 0; j < 2 * i + 1; j++) {
            stars += '*';
        }
        
        let spaces = '';
        for (let j = 0; j < height - i - 1; j++) {
            spaces += ' ';
        }
        
        console.log(spaces + stars + spaces);
    }
}
christmasTree(10);
