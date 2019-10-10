class TicTacToe {
    constructor() {
        this.field =[[null,null,null],[null,null,null],[null,null,null]];
        this.currentPlayer=true;
        this.Winner=null;
        this.turnsCount=0;

    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer?"x":"o";
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex]!=null) return;
        this.currentPlayer?this.field[rowIndex][columnIndex]="x":this.field[rowIndex][columnIndex]="o";
        this.turnsCount++;
        this.currentPlayer=!this.currentPlayer;
        this.isFinished();      
    }

    isFinished() {
        if(this.field[0][0]==this.field[1][1]&&this.field[1][1]==this.field[2][2]&&this.field[2][2]!=null){
            this.Winner=this.field[0][0];
            return true;
        }
        if(this.field[0][2]==this.field[1][1]&&this.field[1][1]==this.field[2][0]&&this.field[2][0]!=null){
            this.Winner=this.field[0][2];
            return true;
        }
        for (let i=0;i<3;i++){
            if (this.field[i][0]==this.field[i][1]&&this.field[i][1]==this.field[i][2]&&this.field[i][2]!=null){
                this.Winner=this.field[i][0];
                return true;
            }
            if(this.field[0][i]==this.field[1][i]&&this.field[0][i]==this.field[2][i]&&this.field[2][i]!=null){
                this.Winner=this.field[0][i];
                return true;
            }
            
        }
        return this.noMoreTurns();    

    }

    getWinner() {
        return this.Winner;
    }

    noMoreTurns() {
        return this.turnsCount>8;
    }

    isDraw() {
        return this.Winner==null&&this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {        
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
