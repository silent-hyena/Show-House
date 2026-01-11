export default function  RatingBox({ rating="0.0" }: { rating: string }) {
    let bgColor = "#01b4e4"
    const r = Number(rating);
    if (r >= 0 && r <= 3) {
        bgColor = "#f37676";
    }
    else if (r > 3 && r <= 5) {
        bgColor = "#ffe08a";
    }
    else if (r > 5 && r < 6) {
        bgColor = "#94d3ff"
    }
    else if(r>=6 && r<7){
        bgColor = "#2da8ffff"
    }
    else if (r >= 7 && r <= 8) {
        bgColor = "#94ffb6"
    }
    else if(r>8 && r<=9) {
        bgColor = "#54d840ff"
    }
    else{
        bgColor = "#1e860eff"
    }
    const formattedRating = Number(rating).toFixed(1);
    return <>
        <div
            className="h-[38px] w-[38px] px-0 p-2  font-bold text-slate-800 text-[12px] flex items-center justify-center border-1 rounded-full m-0"
            style={{ backgroundColor: bgColor}}
        >
            {formattedRating}/10

        </div>
    </>

}