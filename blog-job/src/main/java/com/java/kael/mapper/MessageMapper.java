package com.java.kael.mapper;

import com.java.kael.entity.Message;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author blue
 * @since 2021-09-03
 */
@Mapper
public interface MessageMapper extends BaseMapper<Message> {

    void passBatch(@Param("ids") List<Integer> ids);
}
