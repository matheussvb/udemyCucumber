package br.com.udemy.boasmat.utils;

import java.util.Calendar;
import java.util.Date;

public class DateUtil {

	public static Date obterDataComDiferencaDeDias(int dias) {
		Calendar calendar = Calendar.getInstance();
		calendar.add(Calendar.DAY_OF_MONTH, dias);
		return calendar.getTime();
	}

}
