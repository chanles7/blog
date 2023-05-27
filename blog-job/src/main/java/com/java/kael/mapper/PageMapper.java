package com.java.kael.mapper;

import com.java.kael.entity.Page;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author blue
 * @since 2021-12-26
 */
@Mapper
public interface PageMapper extends BaseMapper<Page> {

}
