const ss = require("simple-statistics");

function predictDemand(bookingsData) {
  if (bookingsData.length < 2) return [];

  const firstDate = new Date(bookingsData[0].date);
  const data = bookingsData.map((item) => {
    const days = Math.floor(
      (new Date(item.date) - firstDate) / (1000 * 60 * 60 * 24)
    );
    return [days, item.count];
  });

  // حساب المتوسط اليومي
  let totalChange = 0;
  for (let i = 1; i < data.length; i++) {
    totalChange += data[i][1] - data[i - 1][1];
  }
  const avgChange = totalChange / (data.length - 1);

  // توقع 7 أيام قادمة
  const lastDay = data[data.length - 1][0];
  const forecast = [];

  for (let i = 1; i <= 7; i++) {
    const futureDay = lastDay + i;
    const predicted = data[data.length - 1][1] + avgChange * i;

    // أضف تباين (Variance) لجعل التنبؤ أقل "خطيًا"
    const variance = Math.random() * 2 - 1; // -1 إلى +1
    const finalPredicted = Math.round(predicted + variance);

    const predictedDate = new Date(firstDate);
    predictedDate.setDate(predictedDate.getDate() + futureDay);

    forecast.push({
      ds: predictedDate.toISOString().split("T")[0],
      yhat: Math.max(0, finalPredicted), // لا تقل عن 0
    });
  }

  return forecast;
}

module.exports = predictDemand;
