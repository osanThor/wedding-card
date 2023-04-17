import moment from "moment";

export default class GeneratorDate {
  public static day: moment.Moment;

  public static generatorDate(_day: moment.Moment) {
    const startWeek = _day.clone().startOf("month").week();
    //** endWeek가 1이면 안되니 마지막 주 53으로 설정 */
    const endWeek =
      _day.clone().endOf("month").week() === 1
        ? 53
        : _day.clone().endOf("month").week();

    let Calendar = [];
    for (let week = startWeek; week <= endWeek; week++) {
      console.log(week);
    }
  }
}
