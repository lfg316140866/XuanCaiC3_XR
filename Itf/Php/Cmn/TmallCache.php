<?php
/**
 * 天猫的cache
 * @author Administrator
 *
 */
class Cache{
	
	/**
	 * 添加cache
	 * @param String $cacheKey cacheKey
	 * @param data $_data      cache的数据
	 * @param int $cachetime   cache时间
	 */
	public static function set($cacheKey,$_data,$cachetime){
		$cacheService->set($cacheKey,$_data,$cachetime);
	}
	
	/**
	 * 获取cache
	 * @param string $cacheKey cacheKey
	 */
	public static function get($cacheKey){
		return $cacheService->get($cacheKey);
	}
	
	/**
	 * 删除cache
	 * @param string $cacheKey cacheKey
	 */
	public static function delete($cacheKey) {
		$cacheService->delete($cacheKey);
	}
}